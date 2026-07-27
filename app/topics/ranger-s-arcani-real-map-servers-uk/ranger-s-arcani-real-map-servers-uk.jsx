import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-uk');
}

export default function RangerSArcaniRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-uk" />;
}
