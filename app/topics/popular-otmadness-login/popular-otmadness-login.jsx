import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-login');
}

export default function PopularOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-login" />;
}
