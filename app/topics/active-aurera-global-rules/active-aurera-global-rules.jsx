import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-rules');
}

export default function ActiveAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-rules" />;
}
