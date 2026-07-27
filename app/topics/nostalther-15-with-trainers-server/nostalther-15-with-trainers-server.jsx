import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-with-trainers-server');
}

export default function Nostalther15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-with-trainers-server" />;
}
