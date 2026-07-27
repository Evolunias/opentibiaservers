import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-server-sweden');
}

export default function RangerSArcaniRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-server-sweden" />;
}
