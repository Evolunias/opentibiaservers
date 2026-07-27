import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-register');
}

export default function FreshStartOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-register" />;
}
