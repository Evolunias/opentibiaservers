import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-register');
}

export default function OtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="otmadness-register" />;
}
