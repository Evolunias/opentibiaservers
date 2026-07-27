import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-south-america');
}

export default function EvoluniaHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-south-america" />;
}
