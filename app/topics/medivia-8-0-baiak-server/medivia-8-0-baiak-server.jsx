import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-baiak-server');
}

export default function Medivia80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-baiak-server" />;
}
