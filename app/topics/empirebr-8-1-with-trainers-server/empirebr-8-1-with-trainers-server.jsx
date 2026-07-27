import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-with-trainers-server');
}

export default function Empirebr81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-with-trainers-server" />;
}
