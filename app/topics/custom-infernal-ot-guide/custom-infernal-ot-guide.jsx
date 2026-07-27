import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-guide');
}

export default function CustomInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-guide" />;
}
