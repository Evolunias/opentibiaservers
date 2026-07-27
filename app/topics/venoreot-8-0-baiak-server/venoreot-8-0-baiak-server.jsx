import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-0-baiak-server');
}

export default function Venoreot80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-0-baiak-server" />;
}
