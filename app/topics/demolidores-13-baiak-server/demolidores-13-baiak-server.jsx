import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-13-baiak-server');
}

export default function Demolidores13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-13-baiak-server" />;
}
