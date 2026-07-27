import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-rules');
}

export default function CurrentOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-rules" />;
}
