import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-seasonal-server');
}

export default function Carlinot71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-seasonal-server" />;
}
