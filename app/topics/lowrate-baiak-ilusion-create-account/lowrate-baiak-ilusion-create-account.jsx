import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-create-account');
}

export default function LowrateBaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-create-account" />;
}
