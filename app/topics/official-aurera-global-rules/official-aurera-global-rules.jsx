import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-rules');
}

export default function OfficialAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-rules" />;
}
