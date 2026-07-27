import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-baiak-server');
}

export default function Medivia11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-baiak-server" />;
}
