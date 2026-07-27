import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-baiak-server');
}

export default function Eldera100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-baiak-server" />;
}
