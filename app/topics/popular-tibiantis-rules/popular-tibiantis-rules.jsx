import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-rules');
}

export default function PopularTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-rules" />;
}
