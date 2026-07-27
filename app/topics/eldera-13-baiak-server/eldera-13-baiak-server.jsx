import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-baiak-server');
}

export default function Eldera13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-baiak-server" />;
}
