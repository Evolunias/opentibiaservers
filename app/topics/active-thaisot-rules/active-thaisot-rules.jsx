import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-rules');
}

export default function ActiveThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-rules" />;
}
