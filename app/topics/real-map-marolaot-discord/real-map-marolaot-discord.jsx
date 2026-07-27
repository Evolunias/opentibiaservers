import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-discord');
}

export default function RealMapMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-discord" />;
}
