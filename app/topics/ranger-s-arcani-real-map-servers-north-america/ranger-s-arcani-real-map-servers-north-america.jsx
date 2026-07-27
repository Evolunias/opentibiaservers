import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-north-america');
}

export default function RangerSArcaniRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-north-america" />;
}
