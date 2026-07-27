import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-baiak-server');
}

export default function Venoreot12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-baiak-server" />;
}
