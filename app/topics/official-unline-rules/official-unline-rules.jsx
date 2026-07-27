import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-rules');
}

export default function OfficialUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="official-unline-rules" />;
}
