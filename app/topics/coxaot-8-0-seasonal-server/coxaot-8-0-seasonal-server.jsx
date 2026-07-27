import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-seasonal-server');
}

export default function Coxaot80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-seasonal-server" />;
}
