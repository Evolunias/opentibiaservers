import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-usa');
}

export default function EvoluniaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-usa" />;
}
