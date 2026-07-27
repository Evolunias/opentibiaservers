import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-rules');
}

export default function MistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-rules" />;
}
