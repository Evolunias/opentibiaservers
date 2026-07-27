import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-baiak-server');
}

export default function Nilot71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-baiak-server" />;
}
