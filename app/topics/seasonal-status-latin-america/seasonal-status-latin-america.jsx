import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-latin-america');
}

export default function SeasonalStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-latin-america" />;
}
