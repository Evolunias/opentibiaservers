import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-rules');
}

export default function NoResetOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-rules" />;
}
