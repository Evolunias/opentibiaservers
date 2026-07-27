import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-register');
}

export default function PopularOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-register" />;
}
