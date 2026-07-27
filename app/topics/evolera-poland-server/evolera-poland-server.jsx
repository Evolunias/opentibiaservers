import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-poland-server');
}

export default function EvoleraPolandServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-poland-server" />;
}
