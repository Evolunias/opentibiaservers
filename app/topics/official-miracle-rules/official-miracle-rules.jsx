import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-rules');
}

export default function OfficialMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-rules" />;
}
