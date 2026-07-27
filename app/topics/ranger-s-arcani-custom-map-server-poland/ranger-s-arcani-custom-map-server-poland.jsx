import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-server-poland');
}

export default function RangerSArcaniCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-server-poland" />;
}
