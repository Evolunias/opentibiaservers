import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-germany');
}

export default function OxygenotSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-germany" />;
}
