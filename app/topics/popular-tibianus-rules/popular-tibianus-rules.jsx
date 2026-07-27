import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-rules');
}

export default function PopularTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-rules" />;
}
