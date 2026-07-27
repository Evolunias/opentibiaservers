import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-active');
}

export default function BaiakServerActiveKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-active" />;
}
