import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-baiak-server');
}

export default function Evolera96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-baiak-server" />;
}
