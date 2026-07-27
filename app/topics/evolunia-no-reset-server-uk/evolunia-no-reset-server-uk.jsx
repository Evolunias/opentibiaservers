import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-no-reset-server-uk');
}

export default function EvoluniaNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-no-reset-server-uk" />;
}
