import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-trainers-server-latin-america');
}

export default function SerenityWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-trainers-server-latin-america" />;
}
