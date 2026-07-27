import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-website');
}

export default function NoResetOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-website" />;
}
