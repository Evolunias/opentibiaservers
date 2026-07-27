import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-uk');
}

export default function CustomMapDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-uk" />;
}
