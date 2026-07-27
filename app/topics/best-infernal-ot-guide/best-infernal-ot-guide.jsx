import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-guide');
}

export default function BestInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-guide" />;
}
