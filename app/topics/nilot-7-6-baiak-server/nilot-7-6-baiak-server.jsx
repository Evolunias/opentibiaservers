import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-6-baiak-server');
}

export default function Nilot76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-6-baiak-server" />;
}
