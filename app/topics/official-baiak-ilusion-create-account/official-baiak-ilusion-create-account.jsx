import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-create-account');
}

export default function OfficialBaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-create-account" />;
}
