import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-south-america');
}

export default function EvoluniaLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-south-america" />;
}
