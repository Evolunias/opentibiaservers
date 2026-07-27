import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-poland');
}

export default function CoxaotSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-poland" />;
}
