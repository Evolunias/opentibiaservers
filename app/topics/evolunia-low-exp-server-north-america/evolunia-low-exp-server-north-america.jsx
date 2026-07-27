import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-north-america');
}

export default function EvoluniaLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-north-america" />;
}
