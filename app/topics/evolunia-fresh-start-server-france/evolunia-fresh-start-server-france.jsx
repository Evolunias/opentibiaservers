import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-france');
}

export default function EvoluniaFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-france" />;
}
