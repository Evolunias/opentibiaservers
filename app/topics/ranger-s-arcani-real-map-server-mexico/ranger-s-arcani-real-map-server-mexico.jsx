import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-server-mexico');
}

export default function RangerSArcaniRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-server-mexico" />;
}
