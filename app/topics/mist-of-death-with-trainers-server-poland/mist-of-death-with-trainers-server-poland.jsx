import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-trainers-server-poland');
}

export default function MistOfDeathWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-trainers-server-poland" />;
}
