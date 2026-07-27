import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-rules');
}

export default function NoResetTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-rules" />;
}
