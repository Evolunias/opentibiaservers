import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-rules');
}

export default function TibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="tibijka-rules" />;
}
