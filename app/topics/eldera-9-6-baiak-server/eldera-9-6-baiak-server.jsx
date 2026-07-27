import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-baiak-server');
}

export default function Eldera96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-baiak-server" />;
}
