import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-germany');
}

export default function SeasonalOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-germany" />;
}
