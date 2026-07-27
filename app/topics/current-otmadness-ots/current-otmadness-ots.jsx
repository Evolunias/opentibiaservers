import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-ots');
}

export default function CurrentOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-ots" />;
}
