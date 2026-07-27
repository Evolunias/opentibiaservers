import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-latin-america');
}

export default function SeasonalOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-latin-america" />;
}
