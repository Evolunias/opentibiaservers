import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-south-america');
}

export default function NilotWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-south-america" />;
}
