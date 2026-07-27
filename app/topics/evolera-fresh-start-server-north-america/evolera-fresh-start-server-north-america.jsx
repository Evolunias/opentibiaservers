import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-north-america');
}

export default function EvoleraFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-north-america" />;
}
