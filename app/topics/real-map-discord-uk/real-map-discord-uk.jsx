import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-uk');
}

export default function RealMapDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-uk" />;
}
