import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-with-trainers-server');
}

export default function Empirebr84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-with-trainers-server" />;
}
