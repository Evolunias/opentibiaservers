import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-trainers-server-germany');
}

export default function MistOfDeathWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-trainers-server-germany" />;
}
