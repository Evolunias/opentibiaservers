import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-south-america');
}

export default function RealMapDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-south-america" />;
}
