import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-servers-usa');
}

export default function RangerSArcaniCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-servers-usa" />;
}
