import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-seasonal-server');
}

export default function Coxaot84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-seasonal-server" />;
}
