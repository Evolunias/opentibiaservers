import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-rules');
}

export default function TopAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-rules" />;
}
