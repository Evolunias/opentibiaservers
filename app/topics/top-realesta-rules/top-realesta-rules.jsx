import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-rules');
}

export default function TopRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-rules" />;
}
