import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-servers-north-america');
}

export default function DuraOnlineCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-servers-north-america" />;
}
