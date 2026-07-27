import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-server-south-america');
}

export default function DuraOnlineCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-server-south-america" />;
}
