import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-south-america');
}

export default function DuraOnlineRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-south-america" />;
}
