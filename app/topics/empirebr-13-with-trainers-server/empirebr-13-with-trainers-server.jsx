import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-with-trainers-server');
}

export default function Empirebr13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-with-trainers-server" />;
}
