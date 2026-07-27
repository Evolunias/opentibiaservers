import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-rules');
}

export default function CustomRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-rules" />;
}
