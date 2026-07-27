import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-online');
}

export default function RealMapLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-online" />;
}
