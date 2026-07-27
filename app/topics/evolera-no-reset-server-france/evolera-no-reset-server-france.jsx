import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-france');
}

export default function EvoleraNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-france" />;
}
