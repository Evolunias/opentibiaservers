import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-0-baiak-server');
}

export default function Nilot80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-0-baiak-server" />;
}
