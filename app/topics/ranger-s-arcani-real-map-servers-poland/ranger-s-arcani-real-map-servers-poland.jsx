import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-poland');
}

export default function RangerSArcaniRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-poland" />;
}
