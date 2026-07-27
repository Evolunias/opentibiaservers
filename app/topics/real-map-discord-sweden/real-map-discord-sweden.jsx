import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-sweden');
}

export default function RealMapDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-sweden" />;
}
