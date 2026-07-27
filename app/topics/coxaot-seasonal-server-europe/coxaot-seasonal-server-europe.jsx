import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-europe');
}

export default function CoxaotSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-europe" />;
}
