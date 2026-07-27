import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-register');
}

export default function OfficialOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-register" />;
}
