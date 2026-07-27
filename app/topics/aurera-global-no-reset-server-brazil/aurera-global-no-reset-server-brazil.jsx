import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-brazil');
}

export default function AureraGlobalNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-brazil" />;
}
