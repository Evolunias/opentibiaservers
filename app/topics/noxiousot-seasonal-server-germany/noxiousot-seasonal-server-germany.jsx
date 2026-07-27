import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-germany');
}

export default function NoxiousotSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-germany" />;
}
