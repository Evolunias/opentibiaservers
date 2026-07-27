import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-europe');
}

export default function EvoluniaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-europe" />;
}
