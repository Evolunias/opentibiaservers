import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-guide');
}

export default function PopularInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-guide" />;
}
