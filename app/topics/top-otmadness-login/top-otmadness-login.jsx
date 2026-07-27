import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-login');
}

export default function TopOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-login" />;
}
