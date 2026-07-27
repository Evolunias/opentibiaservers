import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-seasonal-server');
}

export default function Coxaot11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-seasonal-server" />;
}
