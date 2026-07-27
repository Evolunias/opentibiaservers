import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-seasonal-server');
}

export default function Carlinot81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-seasonal-server" />;
}
