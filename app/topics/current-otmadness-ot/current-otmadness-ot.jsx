import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-ot');
}

export default function CurrentOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-ot" />;
}
