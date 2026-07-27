import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-seasonal-server');
}

export default function Coxaot96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-seasonal-server" />;
}
