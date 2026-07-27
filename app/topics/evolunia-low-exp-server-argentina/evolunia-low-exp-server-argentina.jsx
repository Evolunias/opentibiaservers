import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-argentina');
}

export default function EvoluniaLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-argentina" />;
}
