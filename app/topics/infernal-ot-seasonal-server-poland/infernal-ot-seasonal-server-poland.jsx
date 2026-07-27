import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-seasonal-server-poland');
}

export default function InfernalOtSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-seasonal-server-poland" />;
}
