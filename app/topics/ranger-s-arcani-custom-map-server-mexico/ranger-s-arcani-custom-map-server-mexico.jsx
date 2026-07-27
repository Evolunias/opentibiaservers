import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-server-mexico');
}

export default function RangerSArcaniCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-server-mexico" />;
}
