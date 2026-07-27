import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-mexico');
}

export default function CoxaotSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-mexico" />;
}
