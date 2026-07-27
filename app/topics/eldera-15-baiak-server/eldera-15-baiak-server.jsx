import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-baiak-server');
}

export default function Eldera15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-baiak-server" />;
}
