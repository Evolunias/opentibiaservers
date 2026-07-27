import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-14-baiak-server');
}

export default function Unline14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="unline-14-baiak-server" />;
}
