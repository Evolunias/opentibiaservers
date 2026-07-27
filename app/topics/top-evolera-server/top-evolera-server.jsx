import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-server');
}

export default function TopEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-server" />;
}
