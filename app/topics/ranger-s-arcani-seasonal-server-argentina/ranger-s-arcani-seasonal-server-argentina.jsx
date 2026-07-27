import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-seasonal-server-argentina');
}

export default function RangerSArcaniSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-seasonal-server-argentina" />;
}
