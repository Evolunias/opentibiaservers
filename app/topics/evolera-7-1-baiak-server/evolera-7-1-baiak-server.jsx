import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-baiak-server');
}

export default function Evolera71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-baiak-server" />;
}
