import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-4-seasonal-server');
}

export default function Carlinot74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-4-seasonal-server" />;
}
