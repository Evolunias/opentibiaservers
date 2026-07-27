import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-rules');
}

export default function CustomNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-rules" />;
}
