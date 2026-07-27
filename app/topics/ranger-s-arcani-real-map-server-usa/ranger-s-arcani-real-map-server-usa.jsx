import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-server-usa');
}

export default function RangerSArcaniRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-server-usa" />;
}
