import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-trainers-server-usa');
}

export default function MistOfDeathWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-trainers-server-usa" />;
}
