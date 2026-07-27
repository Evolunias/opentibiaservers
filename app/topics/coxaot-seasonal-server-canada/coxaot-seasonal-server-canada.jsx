import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-canada');
}

export default function CoxaotSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-canada" />;
}
