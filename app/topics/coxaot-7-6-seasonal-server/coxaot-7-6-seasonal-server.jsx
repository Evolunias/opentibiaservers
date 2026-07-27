import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-seasonal-server');
}

export default function Coxaot76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-seasonal-server" />;
}
