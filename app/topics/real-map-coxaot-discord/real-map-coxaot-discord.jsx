import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-discord');
}

export default function RealMapCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-discord" />;
}
