import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-rules');
}

export default function PopularMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-rules" />;
}
