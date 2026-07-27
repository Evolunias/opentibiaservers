import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-discord');
}

export default function RealMapMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-discord" />;
}
