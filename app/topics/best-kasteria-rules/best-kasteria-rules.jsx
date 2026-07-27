import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-rules');
}

export default function BestKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-rules" />;
}
