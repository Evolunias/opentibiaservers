import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-brazil');
}

export default function CoxaotSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-brazil" />;
}
