import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-with-trainers-server');
}

export default function Nilot15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-with-trainers-server" />;
}
