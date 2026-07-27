import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-server-north-america');
}

export default function UnlineCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-server-north-america" />;
}
