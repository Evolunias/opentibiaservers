import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-rules');
}

export default function PopularInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-rules" />;
}
