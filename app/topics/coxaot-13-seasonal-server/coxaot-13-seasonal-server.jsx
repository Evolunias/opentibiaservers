import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-seasonal-server');
}

export default function Coxaot13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-seasonal-server" />;
}
