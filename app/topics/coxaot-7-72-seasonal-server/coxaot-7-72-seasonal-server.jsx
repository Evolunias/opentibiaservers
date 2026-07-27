import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-72-seasonal-server');
}

export default function Coxaot772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-72-seasonal-server" />;
}
