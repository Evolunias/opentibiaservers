import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-seasonal-server-sweden');
}

export default function RangerSArcaniSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-seasonal-server-sweden" />;
}
