import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-72-baiak-server');
}

export default function Evolera772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-72-baiak-server" />;
}
