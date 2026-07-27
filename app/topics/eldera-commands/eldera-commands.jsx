import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-commands');
}

export default function ElderaCommandsKeywordPage() {
  return <StaticKeywordPage slug="eldera-commands" />;
}
