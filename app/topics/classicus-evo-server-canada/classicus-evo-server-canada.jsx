import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-canada');
}

export default function ClassicusEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-canada" />;
}
