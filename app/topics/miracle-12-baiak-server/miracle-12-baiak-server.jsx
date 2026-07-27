import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-baiak-server');
}

export default function Miracle12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-baiak-server" />;
}
