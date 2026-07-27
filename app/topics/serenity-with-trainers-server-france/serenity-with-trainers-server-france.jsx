import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-trainers-server-france');
}

export default function SerenityWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-trainers-server-france" />;
}
