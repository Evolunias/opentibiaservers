import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-discord');
}

export default function RealMapTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-discord" />;
}
