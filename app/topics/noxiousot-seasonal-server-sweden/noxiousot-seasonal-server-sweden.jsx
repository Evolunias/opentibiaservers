import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-sweden');
}

export default function NoxiousotSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-sweden" />;
}
