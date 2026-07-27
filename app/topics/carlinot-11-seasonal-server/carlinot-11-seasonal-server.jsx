import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-seasonal-server');
}

export default function Carlinot11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-seasonal-server" />;
}
