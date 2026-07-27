import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-register');
}

export default function CustomOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-register" />;
}
