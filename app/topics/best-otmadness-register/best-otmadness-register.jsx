import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-register');
}

export default function BestOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-register" />;
}
