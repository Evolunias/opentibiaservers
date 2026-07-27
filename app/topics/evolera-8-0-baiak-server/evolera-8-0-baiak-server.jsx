import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-0-baiak-server');
}

export default function Evolera80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-0-baiak-server" />;
}
