import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-seasonal-server-germany');
}

export default function AureraGlobalSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-seasonal-server-germany" />;
}
