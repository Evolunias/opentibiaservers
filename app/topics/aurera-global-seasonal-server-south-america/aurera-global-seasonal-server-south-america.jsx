import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-seasonal-server-south-america');
}

export default function AureraGlobalSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-seasonal-server-south-america" />;
}
