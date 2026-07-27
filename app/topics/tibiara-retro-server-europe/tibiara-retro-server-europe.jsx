import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-europe');
}

export default function TibiaraRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-europe" />;
}
