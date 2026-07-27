import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-usa');
}

export default function ClassicusEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-usa" />;
}
