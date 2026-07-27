import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-with-trainers-server');
}

export default function Empirebr71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-with-trainers-server" />;
}
