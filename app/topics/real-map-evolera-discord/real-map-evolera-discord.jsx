import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-discord');
}

export default function RealMapEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-discord" />;
}
