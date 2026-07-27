import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-seasonal-server-latin-america');
}

export default function InfernalOtSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-seasonal-server-latin-america" />;
}
