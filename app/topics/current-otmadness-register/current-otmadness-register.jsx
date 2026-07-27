import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-register');
}

export default function CurrentOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-register" />;
}
