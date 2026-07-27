import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-trainers-server-poland');
}

export default function SerenityWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-trainers-server-poland" />;
}
