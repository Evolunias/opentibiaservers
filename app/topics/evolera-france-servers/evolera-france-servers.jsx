import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-france-servers');
}

export default function EvoleraFranceServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-france-servers" />;
}
