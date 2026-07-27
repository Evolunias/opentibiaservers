import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-south-america');
}

export default function NoxiousotSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-south-america" />;
}
