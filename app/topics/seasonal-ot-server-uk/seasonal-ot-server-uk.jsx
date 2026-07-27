import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-uk');
}

export default function SeasonalOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-uk" />;
}
