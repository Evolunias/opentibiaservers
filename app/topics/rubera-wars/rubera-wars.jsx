import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-wars');
}

export default function RuberaWarsKeywordPage() {
  return <StaticKeywordPage slug="rubera-wars" />;
}
