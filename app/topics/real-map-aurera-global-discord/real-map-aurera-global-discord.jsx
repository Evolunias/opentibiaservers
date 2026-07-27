import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-discord');
}

export default function RealMapAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-discord" />;
}
