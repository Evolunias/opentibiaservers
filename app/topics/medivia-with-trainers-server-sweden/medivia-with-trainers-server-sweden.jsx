import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-sweden');
}

export default function MediviaWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-sweden" />;
}
