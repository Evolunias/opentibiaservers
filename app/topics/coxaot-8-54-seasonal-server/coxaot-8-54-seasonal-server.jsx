import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-54-seasonal-server');
}

export default function Coxaot854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-54-seasonal-server" />;
}
