import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-ots');
}

export default function CustomOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-ots" />;
}
