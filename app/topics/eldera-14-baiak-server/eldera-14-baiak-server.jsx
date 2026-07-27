import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-baiak-server');
}

export default function Eldera14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-baiak-server" />;
}
