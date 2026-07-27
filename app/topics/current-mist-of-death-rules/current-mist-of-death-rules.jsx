import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-mist-of-death-rules');
}

export default function CurrentMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="current-mist-of-death-rules" />;
}
