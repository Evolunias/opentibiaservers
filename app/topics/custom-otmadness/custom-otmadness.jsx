import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness');
}

export default function CustomOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness" />;
}
