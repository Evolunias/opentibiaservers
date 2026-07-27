import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-poland');
}

export default function ClassicusFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-poland" />;
}
