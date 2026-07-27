import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-baiak-server');
}

export default function Medivia76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-baiak-server" />;
}
