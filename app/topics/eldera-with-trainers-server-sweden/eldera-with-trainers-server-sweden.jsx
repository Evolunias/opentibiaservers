import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-sweden');
}

export default function ElderaWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-sweden" />;
}
