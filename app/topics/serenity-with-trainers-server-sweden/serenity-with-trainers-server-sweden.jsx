import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-trainers-server-sweden');
}

export default function SerenityWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-trainers-server-sweden" />;
}
