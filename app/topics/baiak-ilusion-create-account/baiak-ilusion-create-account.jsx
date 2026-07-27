import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-create-account');
}

export default function BaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-create-account" />;
}
