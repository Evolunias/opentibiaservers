import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-commands');
}

export default function RealestaCommandsKeywordPage() {
  return <StaticKeywordPage slug="realesta-commands" />;
}
