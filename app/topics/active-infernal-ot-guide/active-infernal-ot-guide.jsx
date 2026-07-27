import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-guide');
}

export default function ActiveInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-guide" />;
}
