import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ranger-s-arcani-server');
}

export default function SeasonalRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ranger-s-arcani-server" />;
}
