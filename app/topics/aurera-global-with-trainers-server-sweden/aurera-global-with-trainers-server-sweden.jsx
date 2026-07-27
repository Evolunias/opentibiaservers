import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-trainers-server-sweden');
}

export default function AureraGlobalWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-trainers-server-sweden" />;
}
