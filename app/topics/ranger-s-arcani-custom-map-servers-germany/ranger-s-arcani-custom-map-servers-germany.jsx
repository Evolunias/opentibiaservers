import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-servers-germany');
}

export default function RangerSArcaniCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-servers-germany" />;
}
