import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-rules');
}

export default function ActiveNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-rules" />;
}
