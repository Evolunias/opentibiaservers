import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-baiak-server');
}

export default function Unline100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-baiak-server" />;
}
