import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-germany');
}

export default function RealMapDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-germany" />;
}
