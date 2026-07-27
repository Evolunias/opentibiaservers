import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-trainers-server-germany');
}

export default function SerenityWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-trainers-server-germany" />;
}
