import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-4-baiak-server');
}

export default function Unline84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-4-baiak-server" />;
}
