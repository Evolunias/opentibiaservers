import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-north-america');
}

export default function TibianusCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-north-america" />;
}
