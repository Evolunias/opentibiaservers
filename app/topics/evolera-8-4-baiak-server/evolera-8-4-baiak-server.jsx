import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-baiak-server');
}

export default function Evolera84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-baiak-server" />;
}
