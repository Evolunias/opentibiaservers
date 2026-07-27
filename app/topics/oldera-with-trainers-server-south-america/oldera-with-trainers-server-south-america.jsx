import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-south-america');
}

export default function OlderaWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-south-america" />;
}
