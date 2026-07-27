import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-discord');
}

export default function RealMapZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-discord" />;
}
