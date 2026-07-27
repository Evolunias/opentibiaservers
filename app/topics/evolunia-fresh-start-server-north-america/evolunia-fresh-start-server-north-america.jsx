import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-north-america');
}

export default function EvoluniaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-north-america" />;
}
