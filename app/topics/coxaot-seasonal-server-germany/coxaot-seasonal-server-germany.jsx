import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-germany');
}

export default function CoxaotSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-germany" />;
}
