import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-chile-servers');
}

export default function EvoleraChileServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-chile-servers" />;
}
