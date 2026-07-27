import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-baiak-server');
}

export default function Medivia100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-baiak-server" />;
}
