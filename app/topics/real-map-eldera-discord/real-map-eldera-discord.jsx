import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-discord');
}

export default function RealMapElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-discord" />;
}
