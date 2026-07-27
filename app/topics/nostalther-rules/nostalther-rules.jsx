import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-rules');
}

export default function NostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="nostalther-rules" />;
}
