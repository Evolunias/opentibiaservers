import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-france-server');
}

export default function EvoleraFranceServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-france-server" />;
}
