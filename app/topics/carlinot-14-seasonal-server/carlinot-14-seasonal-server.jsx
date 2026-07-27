import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-seasonal-server');
}

export default function Carlinot14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-seasonal-server" />;
}
