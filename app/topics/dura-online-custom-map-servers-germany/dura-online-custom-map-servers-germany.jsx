import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-servers-germany');
}

export default function DuraOnlineCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-servers-germany" />;
}
