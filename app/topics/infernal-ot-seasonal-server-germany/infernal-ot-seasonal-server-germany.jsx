import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-seasonal-server-germany');
}

export default function InfernalOtSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-seasonal-server-germany" />;
}
