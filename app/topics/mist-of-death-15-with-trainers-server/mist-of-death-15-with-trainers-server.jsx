import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-with-trainers-server');
}

export default function MistOfDeath15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-with-trainers-server" />;
}
