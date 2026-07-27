import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-france');
}

export default function ClassickDrakoriaEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-france" />;
}
