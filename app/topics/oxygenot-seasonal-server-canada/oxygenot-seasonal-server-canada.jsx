import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-canada');
}

export default function OxygenotSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-canada" />;
}
