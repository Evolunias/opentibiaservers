import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-baiak-server');
}

export default function Evolera86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-baiak-server" />;
}
