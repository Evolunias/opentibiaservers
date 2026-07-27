import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-usa');
}

export default function ClassicusFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-usa" />;
}
