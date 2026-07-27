import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-baiak-server');
}

export default function Oxygenot86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-baiak-server" />;
}
