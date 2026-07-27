import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-blazera-server');
}

export default function SeasonalBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-blazera-server" />;
}
