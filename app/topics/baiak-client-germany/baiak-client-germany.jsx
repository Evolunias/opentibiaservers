import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-germany');
}

export default function BaiakClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-germany" />;
}
