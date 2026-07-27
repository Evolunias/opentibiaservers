import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-seasonal-server-mexico');
}

export default function RangerSArcaniSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-seasonal-server-mexico" />;
}
