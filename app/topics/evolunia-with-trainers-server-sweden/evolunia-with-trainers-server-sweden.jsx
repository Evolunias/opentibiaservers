import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-sweden');
}

export default function EvoluniaWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-sweden" />;
}
