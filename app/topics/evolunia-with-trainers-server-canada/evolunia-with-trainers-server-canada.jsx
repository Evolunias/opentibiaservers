import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-canada');
}

export default function EvoluniaWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-canada" />;
}
