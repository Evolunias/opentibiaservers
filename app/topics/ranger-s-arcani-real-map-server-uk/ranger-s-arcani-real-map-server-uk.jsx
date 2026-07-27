import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-server-uk');
}

export default function RangerSArcaniRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-server-uk" />;
}
