import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-north-america');
}

export default function SeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-north-america" />;
}
