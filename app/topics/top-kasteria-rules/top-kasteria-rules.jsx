import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-rules');
}

export default function TopKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-rules" />;
}
