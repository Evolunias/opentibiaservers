import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-rules');
}

export default function CustomThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-rules" />;
}
