import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-france');
}

export default function NoxiousotSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-france" />;
}
