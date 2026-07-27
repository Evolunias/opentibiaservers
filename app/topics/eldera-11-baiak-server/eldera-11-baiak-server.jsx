import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-baiak-server');
}

export default function Eldera11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-baiak-server" />;
}
