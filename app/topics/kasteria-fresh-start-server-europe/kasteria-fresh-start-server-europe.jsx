import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fresh-start-server-europe');
}

export default function KasteriaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fresh-start-server-europe" />;
}
