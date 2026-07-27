import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-discord');
}

export default function RealMapSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-discord" />;
}
