import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-6-baiak-server');
}

export default function Unline86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-6-baiak-server" />;
}
