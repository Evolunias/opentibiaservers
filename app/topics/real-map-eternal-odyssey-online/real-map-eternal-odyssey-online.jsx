import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey-online');
}

export default function RealMapEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey-online" />;
}
