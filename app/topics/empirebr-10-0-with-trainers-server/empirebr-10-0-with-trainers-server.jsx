import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-with-trainers-server');
}

export default function Empirebr100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-with-trainers-server" />;
}
