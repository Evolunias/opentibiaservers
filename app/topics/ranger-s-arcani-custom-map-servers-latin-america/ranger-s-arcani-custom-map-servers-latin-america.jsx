import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-servers-latin-america');
}

export default function RangerSArcaniCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-servers-latin-america" />;
}
