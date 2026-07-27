import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-seasonal-server-canada');
}

export default function InfernalOtSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-seasonal-server-canada" />;
}
