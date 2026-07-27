import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-trainers-server-sweden');
}

export default function NoxiousotWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-trainers-server-sweden" />;
}
