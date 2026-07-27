import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-servers-canada');
}

export default function DuraOnlineCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-servers-canada" />;
}
