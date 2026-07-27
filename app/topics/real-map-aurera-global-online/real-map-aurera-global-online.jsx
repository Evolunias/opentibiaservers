import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-online');
}

export default function RealMapAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-online" />;
}
