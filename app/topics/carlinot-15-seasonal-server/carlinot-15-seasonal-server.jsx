import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-seasonal-server');
}

export default function Carlinot15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-seasonal-server" />;
}
