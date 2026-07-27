import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-baiak-server');
}

export default function Nilot11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-baiak-server" />;
}
