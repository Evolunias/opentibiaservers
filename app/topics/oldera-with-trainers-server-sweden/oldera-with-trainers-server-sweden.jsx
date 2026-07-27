import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-sweden');
}

export default function OlderaWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-sweden" />;
}
