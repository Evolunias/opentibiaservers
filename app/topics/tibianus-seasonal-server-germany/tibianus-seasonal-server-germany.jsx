import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-germany');
}

export default function TibianusSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-germany" />;
}
