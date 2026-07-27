import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-poland');
}

export default function NilotWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-poland" />;
}
