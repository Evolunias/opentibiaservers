import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-south-america');
}

export default function EvoluniaFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-south-america" />;
}
