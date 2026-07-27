import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-baiak-server');
}

export default function Eldera12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-baiak-server" />;
}
