import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-server');
}

export default function CurrentEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-server" />;
}
