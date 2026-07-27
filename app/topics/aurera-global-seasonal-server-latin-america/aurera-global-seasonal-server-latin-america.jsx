import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-seasonal-server-latin-america');
}

export default function AureraGlobalSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-seasonal-server-latin-america" />;
}
