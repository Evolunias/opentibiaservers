import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-baiak-server');
}

export default function Eldera74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-baiak-server" />;
}
