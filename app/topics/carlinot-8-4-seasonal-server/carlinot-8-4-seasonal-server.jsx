import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-4-seasonal-server');
}

export default function Carlinot84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-4-seasonal-server" />;
}
