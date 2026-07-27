import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-guide');
}

export default function OfficialInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-guide" />;
}
