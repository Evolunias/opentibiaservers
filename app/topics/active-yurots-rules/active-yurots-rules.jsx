import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-rules');
}

export default function ActiveYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-rules" />;
}
