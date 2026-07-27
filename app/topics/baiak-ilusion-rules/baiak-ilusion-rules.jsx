import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-rules');
}

export default function BaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-rules" />;
}
