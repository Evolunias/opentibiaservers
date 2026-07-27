import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-server-usa');
}

export default function RangerSArcaniCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-server-usa" />;
}
