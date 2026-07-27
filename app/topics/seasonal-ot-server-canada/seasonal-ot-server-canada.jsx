import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-canada');
}

export default function SeasonalOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-canada" />;
}
