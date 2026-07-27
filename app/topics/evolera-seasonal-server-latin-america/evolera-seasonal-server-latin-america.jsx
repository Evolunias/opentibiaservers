import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-latin-america');
}

export default function EvoleraSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-latin-america" />;
}
