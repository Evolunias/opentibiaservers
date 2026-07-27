import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-brazil');
}

export default function EvoluniaLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-brazil" />;
}
