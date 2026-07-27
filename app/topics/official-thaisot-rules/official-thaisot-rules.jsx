import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-rules');
}

export default function OfficialThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-rules" />;
}
