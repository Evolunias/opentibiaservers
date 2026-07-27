import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-argentina');
}

export default function EvoluniaHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-argentina" />;
}
