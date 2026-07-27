import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-register');
}

export default function ActiveOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-register" />;
}
