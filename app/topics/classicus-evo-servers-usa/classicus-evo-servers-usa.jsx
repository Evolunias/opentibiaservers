import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-servers-usa');
}

export default function ClassicusEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-servers-usa" />;
}
