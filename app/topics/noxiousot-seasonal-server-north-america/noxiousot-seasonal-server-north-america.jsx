import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-north-america');
}

export default function NoxiousotSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-north-america" />;
}
