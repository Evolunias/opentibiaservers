import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-with-trainers-server');
}

export default function Empirebr12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-with-trainers-server" />;
}
