import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-europe');
}

export default function NilotWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-europe" />;
}
