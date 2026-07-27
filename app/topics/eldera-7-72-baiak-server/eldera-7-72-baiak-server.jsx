import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-baiak-server');
}

export default function Eldera772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-baiak-server" />;
}
