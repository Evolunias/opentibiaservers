import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-argentina');
}

export default function EvoleraFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-argentina" />;
}
