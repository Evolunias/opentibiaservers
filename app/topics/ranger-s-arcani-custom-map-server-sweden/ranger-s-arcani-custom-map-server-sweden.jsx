import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-server-sweden');
}

export default function RangerSArcaniCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-server-sweden" />;
}
