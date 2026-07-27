import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-discord');
}

export default function RealMapSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-discord" />;
}
