import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-france');
}

export default function CustomMapDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-france" />;
}
