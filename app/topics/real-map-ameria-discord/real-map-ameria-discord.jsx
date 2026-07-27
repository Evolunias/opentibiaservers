import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-discord');
}

export default function RealMapAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-discord" />;
}
