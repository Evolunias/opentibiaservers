import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-baiak-server');
}

export default function Evolera12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-baiak-server" />;
}
