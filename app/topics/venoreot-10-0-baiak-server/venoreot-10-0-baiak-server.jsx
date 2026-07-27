import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-baiak-server');
}

export default function Venoreot100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-baiak-server" />;
}
