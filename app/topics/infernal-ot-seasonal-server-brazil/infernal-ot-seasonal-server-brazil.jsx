import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-seasonal-server-brazil');
}

export default function InfernalOtSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-seasonal-server-brazil" />;
}
