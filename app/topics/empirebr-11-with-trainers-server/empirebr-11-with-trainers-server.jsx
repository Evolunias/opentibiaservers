import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-with-trainers-server');
}

export default function Empirebr11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-with-trainers-server" />;
}
