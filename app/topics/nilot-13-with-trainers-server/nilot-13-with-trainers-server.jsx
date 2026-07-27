import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-with-trainers-server');
}

export default function Nilot13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-with-trainers-server" />;
}
