import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-discord');
}

export default function RealMapAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-discord" />;
}
