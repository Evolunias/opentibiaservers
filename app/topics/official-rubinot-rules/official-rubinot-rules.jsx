import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-rules');
}

export default function OfficialRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-rules" />;
}
