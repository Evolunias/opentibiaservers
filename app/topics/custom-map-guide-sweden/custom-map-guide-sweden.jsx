import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-sweden');
}

export default function CustomMapGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-sweden" />;
}
