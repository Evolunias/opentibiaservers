import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-rules');
}

export default function PopularRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-rules" />;
}
