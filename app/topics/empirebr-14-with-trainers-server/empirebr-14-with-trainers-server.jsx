import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-with-trainers-server');
}

export default function Empirebr14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-with-trainers-server" />;
}
