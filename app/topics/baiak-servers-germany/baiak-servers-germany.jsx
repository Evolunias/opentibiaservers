import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-germany');
}

export default function BaiakServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-germany" />;
}
