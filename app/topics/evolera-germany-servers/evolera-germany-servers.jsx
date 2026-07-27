import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-germany-servers');
}

export default function EvoleraGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-germany-servers" />;
}
