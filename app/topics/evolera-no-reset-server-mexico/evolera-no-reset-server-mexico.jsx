import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-mexico');
}

export default function EvoleraNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-mexico" />;
}
