import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-rules');
}

export default function CurrentClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-rules" />;
}
