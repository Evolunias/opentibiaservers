import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-15-baiak-server');
}

export default function Miracle15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-15-baiak-server" />;
}
