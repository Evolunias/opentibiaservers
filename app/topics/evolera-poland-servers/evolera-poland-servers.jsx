import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-poland-servers');
}

export default function EvoleraPolandServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-poland-servers" />;
}
