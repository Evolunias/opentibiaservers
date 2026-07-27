import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-canada');
}

export default function CustomMapDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-canada" />;
}
