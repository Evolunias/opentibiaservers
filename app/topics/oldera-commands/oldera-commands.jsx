import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-commands');
}

export default function OlderaCommandsKeywordPage() {
  return <StaticKeywordPage slug="oldera-commands" />;
}
