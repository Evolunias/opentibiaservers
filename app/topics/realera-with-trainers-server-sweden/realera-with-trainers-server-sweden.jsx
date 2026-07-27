import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-trainers-server-sweden');
}

export default function RealeraWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-with-trainers-server-sweden" />;
}
