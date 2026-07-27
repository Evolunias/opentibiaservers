import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-discord');
}

export default function RealMapNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-discord" />;
}
