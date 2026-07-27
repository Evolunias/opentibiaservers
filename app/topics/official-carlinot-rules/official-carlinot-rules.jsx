import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-rules');
}

export default function OfficialCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-rules" />;
}
