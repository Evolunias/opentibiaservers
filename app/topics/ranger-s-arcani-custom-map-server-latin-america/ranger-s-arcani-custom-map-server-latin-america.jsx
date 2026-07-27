import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-server-latin-america');
}

export default function RangerSArcaniCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-server-latin-america" />;
}
