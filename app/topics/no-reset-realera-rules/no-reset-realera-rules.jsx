import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-rules');
}

export default function NoResetRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-rules" />;
}
