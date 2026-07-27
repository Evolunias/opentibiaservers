import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-register');
}

export default function TopOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-register" />;
}
