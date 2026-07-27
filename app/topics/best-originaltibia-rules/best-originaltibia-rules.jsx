import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-rules');
}

export default function BestOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-rules" />;
}
