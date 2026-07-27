import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-rules');
}

export default function PopularOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-rules" />;
}
