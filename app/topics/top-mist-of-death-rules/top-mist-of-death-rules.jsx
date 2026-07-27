import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-rules');
}

export default function TopMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-rules" />;
}
