import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-baiak-server');
}

export default function Medivia15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-baiak-server" />;
}
