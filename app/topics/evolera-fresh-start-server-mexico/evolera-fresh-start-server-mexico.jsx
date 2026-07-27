import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-mexico');
}

export default function EvoleraFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-mexico" />;
}
