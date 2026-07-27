import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-germany');
}

export default function SeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-germany" />;
}
