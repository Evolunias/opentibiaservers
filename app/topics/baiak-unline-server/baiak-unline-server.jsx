import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-unline-server');
}

export default function BaiakUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-unline-server" />;
}
