import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-server-europe');
}

export default function RangerSArcaniCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-server-europe" />;
}
