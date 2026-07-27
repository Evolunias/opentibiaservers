import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-server');
}

export default function EvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-server" />;
}
