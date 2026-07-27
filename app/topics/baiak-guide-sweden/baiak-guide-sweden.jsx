import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-sweden');
}

export default function BaiakGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-sweden" />;
}
