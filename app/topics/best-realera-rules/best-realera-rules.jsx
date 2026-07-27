import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-rules');
}

export default function BestRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="best-realera-rules" />;
}
