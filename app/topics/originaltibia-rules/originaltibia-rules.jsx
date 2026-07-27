import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-rules');
}

export default function OriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-rules" />;
}
