import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-france');
}

export default function EvoluniaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-france" />;
}
