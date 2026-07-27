import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-rules');
}

export default function CustomOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-rules" />;
}
