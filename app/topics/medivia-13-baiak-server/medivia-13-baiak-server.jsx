import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-baiak-server');
}

export default function Medivia13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-baiak-server" />;
}
