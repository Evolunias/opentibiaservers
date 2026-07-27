import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-germany');
}

export default function SeasonalClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-germany" />;
}
