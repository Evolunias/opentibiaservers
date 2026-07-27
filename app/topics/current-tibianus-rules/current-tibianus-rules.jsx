import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-rules');
}

export default function CurrentTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-rules" />;
}
