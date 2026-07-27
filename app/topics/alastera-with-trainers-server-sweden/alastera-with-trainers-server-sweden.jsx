import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-sweden');
}

export default function AlasteraWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-sweden" />;
}
