import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-guide');
}

export default function FreshStartInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-guide" />;
}
