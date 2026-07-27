import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-rules');
}

export default function ActiveNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-rules" />;
}
