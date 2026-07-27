import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-servers-poland');
}

export default function RangerSArcaniCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-servers-poland" />;
}
