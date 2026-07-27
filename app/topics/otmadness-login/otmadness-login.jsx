import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-login');
}

export default function OtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="otmadness-login" />;
}
