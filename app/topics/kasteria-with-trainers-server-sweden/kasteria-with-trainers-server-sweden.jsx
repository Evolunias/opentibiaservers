import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-sweden');
}

export default function KasteriaWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-sweden" />;
}
