import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-europe');
}

export default function EvoleraFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-europe" />;
}
