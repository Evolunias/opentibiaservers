import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-rules');
}

export default function NewTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-rules" />;
}
