import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-guide');
}

export default function NewInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-guide" />;
}
