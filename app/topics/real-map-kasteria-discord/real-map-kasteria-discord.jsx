import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-discord');
}

export default function RealMapKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-discord" />;
}
