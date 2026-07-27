import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-latin-america');
}

export default function NoxiousotSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-latin-america" />;
}
