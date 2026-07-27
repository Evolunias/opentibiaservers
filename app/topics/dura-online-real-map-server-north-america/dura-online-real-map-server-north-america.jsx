import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-north-america');
}

export default function DuraOnlineRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-north-america" />;
}
