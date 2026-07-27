import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-seasonal-server');
}

export default function Coxaot12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-seasonal-server" />;
}
