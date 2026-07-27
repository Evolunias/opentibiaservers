import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-trainers-server-sweden');
}

export default function NostaltherWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-trainers-server-sweden" />;
}
