import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-baiak-server');
}

export default function Unline71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-baiak-server" />;
}
