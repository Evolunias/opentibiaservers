import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-11-seasonal-server');
}

export default function RangerSArcani11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-11-seasonal-server" />;
}
