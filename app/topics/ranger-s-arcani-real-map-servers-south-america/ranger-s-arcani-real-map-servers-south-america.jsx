import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-south-america');
}

export default function RangerSArcaniRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-south-america" />;
}
