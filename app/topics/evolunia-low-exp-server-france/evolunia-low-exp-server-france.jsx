import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-france');
}

export default function EvoluniaLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-france" />;
}
