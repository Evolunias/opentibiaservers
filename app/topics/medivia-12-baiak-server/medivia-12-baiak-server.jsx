import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-baiak-server');
}

export default function Medivia12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-baiak-server" />;
}
