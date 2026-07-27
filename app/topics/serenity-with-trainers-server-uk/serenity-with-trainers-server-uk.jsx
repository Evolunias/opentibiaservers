import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-trainers-server-uk');
}

export default function SerenityWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-trainers-server-uk" />;
}
