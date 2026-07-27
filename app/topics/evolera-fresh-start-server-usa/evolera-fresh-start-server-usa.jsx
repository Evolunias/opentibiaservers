import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-usa');
}

export default function EvoleraFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-usa" />;
}
