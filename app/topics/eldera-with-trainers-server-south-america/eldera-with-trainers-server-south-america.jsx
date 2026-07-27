import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-south-america');
}

export default function ElderaWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-south-america" />;
}
