import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-discord');
}

export default function RealMapClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-discord" />;
}
