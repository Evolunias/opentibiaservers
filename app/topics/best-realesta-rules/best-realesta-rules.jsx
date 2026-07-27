import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-rules');
}

export default function BestRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-rules" />;
}
