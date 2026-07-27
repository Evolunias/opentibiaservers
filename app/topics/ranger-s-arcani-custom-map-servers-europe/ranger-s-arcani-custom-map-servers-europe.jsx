import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-servers-europe');
}

export default function RangerSArcaniCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-servers-europe" />;
}
