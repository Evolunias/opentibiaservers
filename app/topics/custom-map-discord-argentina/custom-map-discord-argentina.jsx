import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-argentina');
}

export default function CustomMapDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-argentina" />;
}
