import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-sweden');
}

export default function RealMapGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-sweden" />;
}
