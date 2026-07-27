import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-germany');
}

export default function RangerSArcaniRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-germany" />;
}
