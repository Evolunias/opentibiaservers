import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-online');
}

export default function RealMapClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-online" />;
}
