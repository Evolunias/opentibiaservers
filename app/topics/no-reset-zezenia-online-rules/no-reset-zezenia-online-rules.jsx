import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-rules');
}

export default function NoResetZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-rules" />;
}
