import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-seasonal-server');
}

export default function Carlinot12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-seasonal-server" />;
}
