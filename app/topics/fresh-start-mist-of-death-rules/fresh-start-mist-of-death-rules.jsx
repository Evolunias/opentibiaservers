import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-rules');
}

export default function FreshStartMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-rules" />;
}
