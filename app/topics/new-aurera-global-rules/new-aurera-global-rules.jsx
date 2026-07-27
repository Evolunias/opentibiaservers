import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-rules');
}

export default function NewAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-rules" />;
}
