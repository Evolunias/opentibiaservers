import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-no-reset-server-poland');
}

export default function EvoluniaNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-no-reset-server-poland" />;
}
