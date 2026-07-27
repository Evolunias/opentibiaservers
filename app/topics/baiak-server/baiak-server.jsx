import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server');
}

export default function BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-server" />;
}
