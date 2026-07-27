import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-baiak-server');
}

export default function Oxygenot96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-baiak-server" />;
}
