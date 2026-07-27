import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-rules');
}

export default function NewBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-rules" />;
}
