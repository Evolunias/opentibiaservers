import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-europe');
}

export default function SeasonalOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-europe" />;
}
