import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-france');
}

export default function ClassicusEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-france" />;
}
