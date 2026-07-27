import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-uk');
}

export default function CoxaotSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-uk" />;
}
