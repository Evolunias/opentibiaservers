import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-baiak-server');
}

export default function Nilot12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-baiak-server" />;
}
