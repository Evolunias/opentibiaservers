import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-14-seasonal-server');
}

export default function RangerSArcani14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-14-seasonal-server" />;
}
