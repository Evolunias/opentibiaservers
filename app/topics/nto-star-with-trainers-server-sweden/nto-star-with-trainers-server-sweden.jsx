import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-trainers-server-sweden');
}

export default function NtoStarWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-trainers-server-sweden" />;
}
