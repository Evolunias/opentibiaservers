import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-argentina');
}

export default function CoxaotSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-argentina" />;
}
