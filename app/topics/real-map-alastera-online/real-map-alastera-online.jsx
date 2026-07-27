import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-online');
}

export default function RealMapAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-online" />;
}
