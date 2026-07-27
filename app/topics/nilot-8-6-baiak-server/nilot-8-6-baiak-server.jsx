import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-6-baiak-server');
}

export default function Nilot86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-6-baiak-server" />;
}
