import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-trainers-server-europe');
}

export default function MistOfDeathWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-trainers-server-europe" />;
}
