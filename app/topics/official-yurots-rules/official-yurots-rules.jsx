import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-rules');
}

export default function OfficialYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-rules" />;
}
