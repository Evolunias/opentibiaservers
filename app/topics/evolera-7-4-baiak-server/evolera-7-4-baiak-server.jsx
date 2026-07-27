import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-baiak-server');
}

export default function Evolera74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-baiak-server" />;
}
