import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-discord');
}

export default function RealMapImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-discord" />;
}
