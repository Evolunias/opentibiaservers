import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-rules');
}

export default function PopularAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-rules" />;
}
