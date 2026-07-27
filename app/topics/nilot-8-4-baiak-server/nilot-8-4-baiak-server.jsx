import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-4-baiak-server');
}

export default function Nilot84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-4-baiak-server" />;
}
