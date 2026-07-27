import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-0-seasonal-server');
}

export default function Carlinot80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-0-seasonal-server" />;
}
