import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-no-reset-server-north-america');
}

export default function EvoluniaNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-no-reset-server-north-america" />;
}
