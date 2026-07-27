import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-ot');
}

export default function CustomOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-ot" />;
}
