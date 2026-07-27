import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-server-north-america');
}

export default function DuraOnlineCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-server-north-america" />;
}
