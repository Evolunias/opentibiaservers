import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-with-trainers-server');
}

export default function Nilot12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-with-trainers-server" />;
}
