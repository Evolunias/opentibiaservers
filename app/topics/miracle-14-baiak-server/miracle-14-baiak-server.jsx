import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-14-baiak-server');
}

export default function Miracle14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-14-baiak-server" />;
}
