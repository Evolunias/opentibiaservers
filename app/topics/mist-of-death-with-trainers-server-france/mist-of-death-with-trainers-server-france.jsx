import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-trainers-server-france');
}

export default function MistOfDeathWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-trainers-server-france" />;
}
