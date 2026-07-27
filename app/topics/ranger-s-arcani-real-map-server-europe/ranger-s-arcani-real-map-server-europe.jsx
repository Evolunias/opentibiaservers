import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-server-europe');
}

export default function RangerSArcaniRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-server-europe" />;
}
