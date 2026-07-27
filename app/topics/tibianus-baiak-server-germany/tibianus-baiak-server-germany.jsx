import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-germany');
}

export default function TibianusBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-germany" />;
}
