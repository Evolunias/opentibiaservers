import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-seasonal-server');
}

export default function Coxaot81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-seasonal-server" />;
}
