import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-france');
}

export default function EvoluniaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-france" />;
}
