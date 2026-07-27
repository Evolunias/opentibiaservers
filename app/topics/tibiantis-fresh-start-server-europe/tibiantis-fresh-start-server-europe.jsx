import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fresh-start-server-europe');
}

export default function TibiantisFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fresh-start-server-europe" />;
}
