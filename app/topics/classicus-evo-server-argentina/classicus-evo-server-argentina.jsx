import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-argentina');
}

export default function ClassicusEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-argentina" />;
}
