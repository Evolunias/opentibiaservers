import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-baiak-server');
}

export default function Medivia96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-baiak-server" />;
}
