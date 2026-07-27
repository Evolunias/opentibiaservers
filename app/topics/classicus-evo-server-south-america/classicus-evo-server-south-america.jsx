import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-south-america');
}

export default function ClassicusEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-south-america" />;
}
