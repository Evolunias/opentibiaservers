import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-1-baiak-server');
}

export default function Venoreot81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-1-baiak-server" />;
}
