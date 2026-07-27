import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-trainers-server-argentina');
}

export default function SerenityWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-trainers-server-argentina" />;
}
