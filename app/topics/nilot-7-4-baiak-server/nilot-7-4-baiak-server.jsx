import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-4-baiak-server');
}

export default function Nilot74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-4-baiak-server" />;
}
