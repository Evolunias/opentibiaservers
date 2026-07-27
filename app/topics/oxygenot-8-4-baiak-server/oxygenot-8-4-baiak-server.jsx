import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-4-baiak-server');
}

export default function Oxygenot84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-4-baiak-server" />;
}
