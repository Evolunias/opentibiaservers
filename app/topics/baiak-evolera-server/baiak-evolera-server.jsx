import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-evolera-server');
}

export default function BaiakEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-evolera-server" />;
}
