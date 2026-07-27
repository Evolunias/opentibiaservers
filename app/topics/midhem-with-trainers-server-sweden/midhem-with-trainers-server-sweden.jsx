import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-sweden');
}

export default function MidhemWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-sweden" />;
}
