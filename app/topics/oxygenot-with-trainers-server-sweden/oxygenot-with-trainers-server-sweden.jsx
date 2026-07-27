import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-trainers-server-sweden');
}

export default function OxygenotWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-trainers-server-sweden" />;
}
