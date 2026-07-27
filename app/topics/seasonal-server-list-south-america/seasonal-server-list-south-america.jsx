import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-south-america');
}

export default function SeasonalServerListSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-south-america" />;
}
