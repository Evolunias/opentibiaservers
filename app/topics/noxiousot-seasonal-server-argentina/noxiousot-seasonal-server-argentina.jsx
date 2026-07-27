import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-argentina');
}

export default function NoxiousotSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-argentina" />;
}
