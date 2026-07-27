import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-login');
}

export default function CustomOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-login" />;
}
