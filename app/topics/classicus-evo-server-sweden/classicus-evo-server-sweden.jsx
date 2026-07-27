import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-sweden');
}

export default function ClassicusEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-sweden" />;
}
