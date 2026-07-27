import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-mexico');
}

export default function RangerSArcaniRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-mexico" />;
}
