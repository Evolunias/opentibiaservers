import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-rules');
}

export default function NewOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-rules" />;
}
