import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-poland');
}

export default function RealMapDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-poland" />;
}
