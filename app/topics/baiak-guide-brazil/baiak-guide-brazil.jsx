import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-brazil');
}

export default function BaiakGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-brazil" />;
}
