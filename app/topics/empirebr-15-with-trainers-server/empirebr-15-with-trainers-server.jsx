import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-with-trainers-server');
}

export default function Empirebr15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-with-trainers-server" />;
}
