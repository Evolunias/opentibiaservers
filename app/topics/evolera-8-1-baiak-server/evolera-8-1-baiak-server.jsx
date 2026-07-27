import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-baiak-server');
}

export default function Evolera81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-baiak-server" />;
}
