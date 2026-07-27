import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fresh-start-server-europe');
}

export default function NtoStarFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fresh-start-server-europe" />;
}
