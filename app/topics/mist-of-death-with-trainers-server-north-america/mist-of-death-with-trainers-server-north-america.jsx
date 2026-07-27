import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-trainers-server-north-america');
}

export default function MistOfDeathWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-trainers-server-north-america" />;
}
