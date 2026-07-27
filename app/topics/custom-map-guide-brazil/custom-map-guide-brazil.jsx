import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-brazil');
}

export default function CustomMapGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-brazil" />;
}
