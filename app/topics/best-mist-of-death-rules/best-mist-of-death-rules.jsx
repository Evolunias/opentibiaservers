import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-rules');
}

export default function BestMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-rules" />;
}
