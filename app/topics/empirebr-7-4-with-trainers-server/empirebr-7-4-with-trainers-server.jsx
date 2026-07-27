import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-with-trainers-server');
}

export default function Empirebr74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-with-trainers-server" />;
}
