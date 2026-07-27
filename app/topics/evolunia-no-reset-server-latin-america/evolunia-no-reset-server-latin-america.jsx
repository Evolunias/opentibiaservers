import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-no-reset-server-latin-america');
}

export default function EvoluniaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-no-reset-server-latin-america" />;
}
