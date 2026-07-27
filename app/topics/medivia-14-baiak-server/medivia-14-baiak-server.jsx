import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-baiak-server');
}

export default function Medivia14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-baiak-server" />;
}
