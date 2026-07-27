import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-europe');
}

export default function TibiaraFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-europe" />;
}
