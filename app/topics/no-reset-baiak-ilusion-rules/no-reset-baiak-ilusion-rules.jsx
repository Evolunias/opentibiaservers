import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-rules');
}

export default function NoResetBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-rules" />;
}
