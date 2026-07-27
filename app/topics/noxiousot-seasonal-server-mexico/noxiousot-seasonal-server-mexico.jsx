import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-mexico');
}

export default function NoxiousotSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-mexico" />;
}
