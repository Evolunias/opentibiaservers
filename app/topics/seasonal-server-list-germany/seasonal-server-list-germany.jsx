import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-germany');
}

export default function SeasonalServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-germany" />;
}
