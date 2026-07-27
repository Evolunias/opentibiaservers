import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-north-america');
}

export default function ClassicusEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-north-america" />;
}
