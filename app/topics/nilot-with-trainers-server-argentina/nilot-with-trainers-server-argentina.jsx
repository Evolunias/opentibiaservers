import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-argentina');
}

export default function NilotWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-argentina" />;
}
