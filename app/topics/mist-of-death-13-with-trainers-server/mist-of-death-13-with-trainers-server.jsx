import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-13-with-trainers-server');
}

export default function MistOfDeath13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-13-with-trainers-server" />;
}
