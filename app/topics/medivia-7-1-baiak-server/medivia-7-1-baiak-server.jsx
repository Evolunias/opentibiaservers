import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-baiak-server');
}

export default function Medivia71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-baiak-server" />;
}
