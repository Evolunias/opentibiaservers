import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fresh-start-server-germany');
}

export default function TibiantisFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fresh-start-server-germany" />;
}
