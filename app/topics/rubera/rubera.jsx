import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera');
}

export default function RuberaKeywordPage() {
  return <StaticKeywordPage slug="rubera" />;
}
