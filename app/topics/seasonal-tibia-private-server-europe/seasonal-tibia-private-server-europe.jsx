import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibia-private-server-europe');
}

export default function SeasonalTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibia-private-server-europe" />;
}
