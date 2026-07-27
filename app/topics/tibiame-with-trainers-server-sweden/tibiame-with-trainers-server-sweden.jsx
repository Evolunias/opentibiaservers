import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-sweden');
}

export default function TibiameWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-sweden" />;
}
