import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-login');
}

export default function OfficialOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-login" />;
}
