import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-rules');
}

export default function CustomMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-rules" />;
}
