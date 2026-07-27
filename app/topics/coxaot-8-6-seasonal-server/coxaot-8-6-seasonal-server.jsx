import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-seasonal-server');
}

export default function Coxaot86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-seasonal-server" />;
}
