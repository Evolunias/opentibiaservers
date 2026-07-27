import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-uk');
}

export default function NilotWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-uk" />;
}
