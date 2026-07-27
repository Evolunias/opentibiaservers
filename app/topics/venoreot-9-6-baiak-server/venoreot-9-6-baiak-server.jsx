import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-9-6-baiak-server');
}

export default function Venoreot96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-9-6-baiak-server" />;
}
