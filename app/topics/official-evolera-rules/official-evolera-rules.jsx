import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-rules');
}

export default function OfficialEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-rules" />;
}
