import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-online');
}

export default function RealMapCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-online" />;
}
