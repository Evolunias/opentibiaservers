import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-trainers-server-sweden');
}

export default function ArcaniarlWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-trainers-server-sweden" />;
}
