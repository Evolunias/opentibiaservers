import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-discord');
}

export default function RealMapMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-discord" />;
}
