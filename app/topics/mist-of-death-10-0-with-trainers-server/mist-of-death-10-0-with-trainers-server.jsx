import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-0-with-trainers-server');
}

export default function MistOfDeath100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-0-with-trainers-server" />;
}
