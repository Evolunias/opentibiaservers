import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-guide');
}

export default function CurrentInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-guide" />;
}
