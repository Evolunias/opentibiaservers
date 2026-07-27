import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-rules');
}

export default function PopularClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-rules" />;
}
