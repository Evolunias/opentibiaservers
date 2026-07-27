import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-north-america');
}

export default function RealMapDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-north-america" />;
}
