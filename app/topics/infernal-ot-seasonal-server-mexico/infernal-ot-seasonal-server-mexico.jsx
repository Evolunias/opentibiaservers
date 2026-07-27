import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-seasonal-server-mexico');
}

export default function InfernalOtSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-seasonal-server-mexico" />;
}
