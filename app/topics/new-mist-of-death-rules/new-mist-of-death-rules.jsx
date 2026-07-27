import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-rules');
}

export default function NewMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-rules" />;
}
