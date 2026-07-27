import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-usa');
}

export default function CustomMapDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-usa" />;
}
