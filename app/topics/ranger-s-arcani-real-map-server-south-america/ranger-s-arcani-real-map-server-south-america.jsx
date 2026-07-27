import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-server-south-america');
}

export default function RangerSArcaniRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-server-south-america" />;
}
