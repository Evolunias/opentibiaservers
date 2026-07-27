import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-south-america');
}

export default function CustomMapClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-south-america" />;
}
