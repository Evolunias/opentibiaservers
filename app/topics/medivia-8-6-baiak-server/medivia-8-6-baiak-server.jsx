import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-baiak-server');
}

export default function Medivia86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-baiak-server" />;
}
