import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-with-trainers-server');
}

export default function Nilot14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-with-trainers-server" />;
}
