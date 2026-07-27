import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-baiak-server');
}

export default function Nilot15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-baiak-server" />;
}
