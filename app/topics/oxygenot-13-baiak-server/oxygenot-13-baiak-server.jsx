import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-baiak-server');
}

export default function Oxygenot13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-baiak-server" />;
}
