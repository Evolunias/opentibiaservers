import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-baiak-server');
}

export default function Nilot81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-baiak-server" />;
}
