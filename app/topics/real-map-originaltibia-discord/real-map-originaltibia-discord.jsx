import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-discord');
}

export default function RealMapOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-discord" />;
}
