import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-discord');
}

export default function RealMapRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-discord" />;
}
