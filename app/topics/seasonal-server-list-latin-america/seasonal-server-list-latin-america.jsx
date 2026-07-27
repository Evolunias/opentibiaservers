import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-latin-america');
}

export default function SeasonalServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-latin-america" />;
}
