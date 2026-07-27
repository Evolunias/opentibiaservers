import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-baiak-server');
}

export default function Blazera12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-baiak-server" />;
}
