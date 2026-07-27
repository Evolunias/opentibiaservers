import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-north-america');
}

export default function CoxaotSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-north-america" />;
}
