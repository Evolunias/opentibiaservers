import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-training');
}

export default function BaiakIlusionTrainingKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-training" />;
}
