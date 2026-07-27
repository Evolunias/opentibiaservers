import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-with-trainers-server');
}

export default function Nilot11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-with-trainers-server" />;
}
