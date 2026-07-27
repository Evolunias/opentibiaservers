import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-sweden');
}

export default function TibiaraWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-sweden" />;
}
