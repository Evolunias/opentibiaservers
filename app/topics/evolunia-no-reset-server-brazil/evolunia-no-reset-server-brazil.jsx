import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-no-reset-server-brazil');
}

export default function EvoluniaNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-no-reset-server-brazil" />;
}
