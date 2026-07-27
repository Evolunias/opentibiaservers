import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-server');
}

export default function BestEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-server" />;
}
