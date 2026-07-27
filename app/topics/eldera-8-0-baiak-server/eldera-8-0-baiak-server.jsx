import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-baiak-server');
}

export default function Eldera80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-baiak-server" />;
}
