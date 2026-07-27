import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-baiak-server');
}

export default function Oxygenot80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-baiak-server" />;
}
