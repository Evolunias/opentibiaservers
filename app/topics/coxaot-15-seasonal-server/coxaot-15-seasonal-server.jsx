import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-seasonal-server');
}

export default function Coxaot15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-seasonal-server" />;
}
