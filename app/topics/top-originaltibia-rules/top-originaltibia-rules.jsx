import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-rules');
}

export default function TopOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-rules" />;
}
