import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-open-pvp');
}

export default function RuberaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="rubera-open-pvp" />;
}
