import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-germany');
}

export default function AlasteraBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-germany" />;
}
