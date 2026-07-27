import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-france');
}

export default function EvoleraFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-france" />;
}
