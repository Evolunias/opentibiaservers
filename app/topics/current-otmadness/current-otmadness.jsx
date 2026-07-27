import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness');
}

export default function CurrentOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness" />;
}
