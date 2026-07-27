import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-poland');
}

export default function CustomMapDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-poland" />;
}
