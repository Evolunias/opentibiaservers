import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-register');
}

export default function NewOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-register" />;
}
