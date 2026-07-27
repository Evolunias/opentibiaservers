import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-latin-america');
}

export default function SeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-latin-america" />;
}
