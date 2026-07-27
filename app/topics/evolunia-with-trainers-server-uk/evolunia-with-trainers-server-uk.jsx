import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-uk');
}

export default function EvoluniaWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-uk" />;
}
