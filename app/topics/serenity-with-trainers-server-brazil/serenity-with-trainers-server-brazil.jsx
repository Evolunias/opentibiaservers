import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-trainers-server-brazil');
}

export default function SerenityWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-trainers-server-brazil" />;
}
