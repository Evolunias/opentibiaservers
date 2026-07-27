import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-alastera-server');
}

export default function BaiakAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-alastera-server" />;
}
