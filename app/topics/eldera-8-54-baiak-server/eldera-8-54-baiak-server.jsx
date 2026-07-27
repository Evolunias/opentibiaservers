import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-baiak-server');
}

export default function Eldera854BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-baiak-server" />;
}
