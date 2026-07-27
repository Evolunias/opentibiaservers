import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-trainers-server-uk');
}

export default function MistOfDeathWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-trainers-server-uk" />;
}
