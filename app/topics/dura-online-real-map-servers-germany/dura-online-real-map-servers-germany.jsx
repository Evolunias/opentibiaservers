import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-servers-germany');
}

export default function DuraOnlineRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-servers-germany" />;
}
