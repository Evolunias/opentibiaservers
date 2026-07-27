import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-brazil');
}

export default function RealMapDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-brazil" />;
}
