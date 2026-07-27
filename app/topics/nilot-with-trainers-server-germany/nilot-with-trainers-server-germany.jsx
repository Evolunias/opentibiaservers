import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-germany');
}

export default function NilotWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-germany" />;
}
