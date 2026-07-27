import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-seasonal-server');
}

export default function Carlinot96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-seasonal-server" />;
}
