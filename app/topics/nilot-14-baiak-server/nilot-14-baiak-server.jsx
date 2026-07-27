import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-baiak-server');
}

export default function Nilot14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-baiak-server" />;
}
