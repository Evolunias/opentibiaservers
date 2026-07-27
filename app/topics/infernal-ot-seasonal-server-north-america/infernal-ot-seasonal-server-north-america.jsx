import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-seasonal-server-north-america');
}

export default function InfernalOtSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-seasonal-server-north-america" />;
}
