import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-login');
}

export default function ActiveOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-login" />;
}
