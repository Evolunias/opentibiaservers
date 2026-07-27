import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-north-america');
}

export default function EvoleraNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-north-america" />;
}
