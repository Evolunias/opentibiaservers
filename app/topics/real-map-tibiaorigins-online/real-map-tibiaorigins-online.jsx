import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-online');
}

export default function RealMapTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-online" />;
}
