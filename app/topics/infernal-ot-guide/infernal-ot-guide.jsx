import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-guide');
}

export default function InfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-guide" />;
}
