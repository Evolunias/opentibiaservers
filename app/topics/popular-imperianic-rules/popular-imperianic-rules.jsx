import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-rules');
}

export default function PopularImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-rules" />;
}
