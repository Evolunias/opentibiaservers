import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-trainers-server-usa');
}

export default function SerenityWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-trainers-server-usa" />;
}
