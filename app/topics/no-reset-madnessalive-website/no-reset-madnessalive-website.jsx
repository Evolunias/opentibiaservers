import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-website');
}

export default function NoResetMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-website" />;
}
