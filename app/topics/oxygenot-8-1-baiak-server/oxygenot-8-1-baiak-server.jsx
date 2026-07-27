import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-baiak-server');
}

export default function Oxygenot81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-baiak-server" />;
}
