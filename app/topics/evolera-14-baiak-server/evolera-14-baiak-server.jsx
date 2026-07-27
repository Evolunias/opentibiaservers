import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-baiak-server');
}

export default function Evolera14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-baiak-server" />;
}
