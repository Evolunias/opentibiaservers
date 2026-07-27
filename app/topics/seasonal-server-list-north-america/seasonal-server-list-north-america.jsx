import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-north-america');
}

export default function SeasonalServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-north-america" />;
}
