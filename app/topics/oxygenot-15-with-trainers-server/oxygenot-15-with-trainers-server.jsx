import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-with-trainers-server');
}

export default function Oxygenot15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-with-trainers-server" />;
}
