import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-oxygenot-server');
}

export default function BaiakOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-oxygenot-server" />;
}
