import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-guide');
}

export default function TopInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-guide" />;
}
