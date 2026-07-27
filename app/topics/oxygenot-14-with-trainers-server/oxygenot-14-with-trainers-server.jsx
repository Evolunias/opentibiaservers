import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-with-trainers-server');
}

export default function Oxygenot14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-with-trainers-server" />;
}
