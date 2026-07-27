import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-sweden');
}

export default function BlazeraWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-sweden" />;
}
