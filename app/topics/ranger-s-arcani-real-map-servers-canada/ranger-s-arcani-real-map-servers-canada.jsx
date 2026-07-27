import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-canada');
}

export default function RangerSArcaniRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-canada" />;
}
