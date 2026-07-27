import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-mexico');
}

export default function ClassicusEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-mexico" />;
}
