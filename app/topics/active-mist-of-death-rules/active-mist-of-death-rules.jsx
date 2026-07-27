import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-rules');
}

export default function ActiveMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-rules" />;
}
