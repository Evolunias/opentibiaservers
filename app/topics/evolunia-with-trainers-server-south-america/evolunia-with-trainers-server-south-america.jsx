import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-south-america');
}

export default function EvoluniaWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-south-america" />;
}
