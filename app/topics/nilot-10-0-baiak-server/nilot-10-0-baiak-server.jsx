import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-baiak-server');
}

export default function Nilot100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-baiak-server" />;
}
