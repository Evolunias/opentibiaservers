import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-with-trainers-server');
}

export default function Oxygenot11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-with-trainers-server" />;
}
