import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-baiak-server');
}

export default function Venoreot15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-baiak-server" />;
}
