import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-seasonal-server');
}

export default function Carlinot100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-seasonal-server" />;
}
