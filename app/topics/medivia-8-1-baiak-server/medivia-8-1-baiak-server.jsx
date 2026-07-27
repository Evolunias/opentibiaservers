import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-baiak-server');
}

export default function Medivia81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-baiak-server" />;
}
