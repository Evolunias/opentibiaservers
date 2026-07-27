import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-seasonal-server-france');
}

export default function InfernalOtSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-seasonal-server-france" />;
}
