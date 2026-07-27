import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-sweden');
}

export default function NepreniaWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-sweden" />;
}
