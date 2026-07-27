import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-latin-america');
}

export default function RangerSArcaniRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-latin-america" />;
}
