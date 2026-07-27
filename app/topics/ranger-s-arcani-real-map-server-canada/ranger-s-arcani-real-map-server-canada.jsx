import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-server-canada');
}

export default function RangerSArcaniRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-server-canada" />;
}
