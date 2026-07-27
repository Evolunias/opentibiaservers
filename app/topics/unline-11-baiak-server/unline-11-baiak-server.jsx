import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-baiak-server');
}

export default function Unline11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-baiak-server" />;
}
