import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-rules');
}

export default function ActiveOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-rules" />;
}
