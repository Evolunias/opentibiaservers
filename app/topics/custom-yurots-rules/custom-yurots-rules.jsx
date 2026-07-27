import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-rules');
}

export default function CustomYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-rules" />;
}
