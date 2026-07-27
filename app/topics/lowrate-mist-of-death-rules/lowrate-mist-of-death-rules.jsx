import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-rules');
}

export default function LowrateMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-rules" />;
}
