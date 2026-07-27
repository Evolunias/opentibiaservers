import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-rules');
}

export default function NoResetTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-rules" />;
}
