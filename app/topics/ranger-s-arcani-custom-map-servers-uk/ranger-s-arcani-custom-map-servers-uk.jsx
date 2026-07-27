import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-servers-uk');
}

export default function RangerSArcaniCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-servers-uk" />;
}
