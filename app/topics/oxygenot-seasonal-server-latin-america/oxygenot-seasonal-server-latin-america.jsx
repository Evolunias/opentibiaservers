import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-latin-america');
}

export default function OxygenotSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-latin-america" />;
}
