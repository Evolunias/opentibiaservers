import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-trainers-server-sweden');
}

export default function TibiantisWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-trainers-server-sweden" />;
}
