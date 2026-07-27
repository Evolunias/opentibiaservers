import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-no-reset-server-europe');
}

export default function EvoluniaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-no-reset-server-europe" />;
}
