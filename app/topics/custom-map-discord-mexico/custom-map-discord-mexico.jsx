import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-mexico');
}

export default function CustomMapDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-mexico" />;
}
