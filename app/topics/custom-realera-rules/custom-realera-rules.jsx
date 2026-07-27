import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-rules');
}

export default function CustomRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-rules" />;
}
