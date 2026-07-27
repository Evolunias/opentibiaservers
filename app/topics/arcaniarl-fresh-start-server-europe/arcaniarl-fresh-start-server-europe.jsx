import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fresh-start-server-europe');
}

export default function ArcaniarlFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fresh-start-server-europe" />;
}
