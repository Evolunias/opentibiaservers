import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-germany');
}

export default function EvoluniaWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-germany" />;
}
