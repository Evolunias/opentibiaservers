import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-seasonal-server-canada');
}

export default function AureraGlobalSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-seasonal-server-canada" />;
}
