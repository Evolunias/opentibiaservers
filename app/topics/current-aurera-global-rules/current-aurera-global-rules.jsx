import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-rules');
}

export default function CurrentAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-rules" />;
}
