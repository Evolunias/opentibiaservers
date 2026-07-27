import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-server-north-america');
}

export default function RangerSArcaniRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-server-north-america" />;
}
