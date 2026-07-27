import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-baiak-server');
}

export default function Evolera13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-baiak-server" />;
}
