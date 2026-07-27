import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-6-seasonal-server');
}

export default function Carlinot76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-6-seasonal-server" />;
}
