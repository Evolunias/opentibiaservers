import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-brazil');
}

export default function CustomMapDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-brazil" />;
}
