import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-rules');
}

export default function AureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-rules" />;
}
