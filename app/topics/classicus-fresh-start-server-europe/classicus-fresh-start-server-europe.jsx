import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-europe');
}

export default function ClassicusFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-europe" />;
}
