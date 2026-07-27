import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-usa');
}

export default function RangerSArcaniRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-usa" />;
}
