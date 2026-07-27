import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-south-america');
}

export default function ClassickDrakoriaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-south-america" />;
}
