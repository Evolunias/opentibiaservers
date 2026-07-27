import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-baiak-server');
}

export default function Evolera15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-baiak-server" />;
}
