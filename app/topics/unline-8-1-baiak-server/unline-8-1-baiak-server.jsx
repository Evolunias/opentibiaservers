import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-1-baiak-server');
}

export default function Unline81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-1-baiak-server" />;
}
