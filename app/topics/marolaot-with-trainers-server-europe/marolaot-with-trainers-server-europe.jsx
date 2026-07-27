import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-trainers-server-europe');
}

export default function MarolaotWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-trainers-server-europe" />;
}
