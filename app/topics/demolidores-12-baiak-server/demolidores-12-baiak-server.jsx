import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-baiak-server');
}

export default function Demolidores12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-baiak-server" />;
}
