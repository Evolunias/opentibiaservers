import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-canada');
}

export default function EvoleraFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-canada" />;
}
