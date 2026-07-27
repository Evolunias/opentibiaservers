import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-rules');
}

export default function CustomNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-rules" />;
}
