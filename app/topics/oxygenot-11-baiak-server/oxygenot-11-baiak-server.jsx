import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-baiak-server');
}

export default function Oxygenot11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-baiak-server" />;
}
