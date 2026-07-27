import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-europe');
}

export default function CustomMapDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-europe" />;
}
