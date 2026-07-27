import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-brazil');
}

export default function RealMapGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-brazil" />;
}
