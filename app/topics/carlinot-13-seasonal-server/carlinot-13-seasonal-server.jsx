import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-seasonal-server');
}

export default function Carlinot13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-seasonal-server" />;
}
