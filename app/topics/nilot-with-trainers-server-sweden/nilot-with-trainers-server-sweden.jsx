import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-sweden');
}

export default function NilotWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-sweden" />;
}
