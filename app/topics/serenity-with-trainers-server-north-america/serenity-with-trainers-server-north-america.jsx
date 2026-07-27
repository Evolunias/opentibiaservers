import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-trainers-server-north-america');
}

export default function SerenityWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-trainers-server-north-america" />;
}
