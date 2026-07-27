import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-canada');
}

export default function NoxiousotSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-canada" />;
}
