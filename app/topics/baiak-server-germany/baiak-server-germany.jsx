import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-germany');
}

export default function BaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-germany" />;
}
