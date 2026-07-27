import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-usa');
}

export default function CoxaotSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-usa" />;
}
