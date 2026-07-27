import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-south-america');
}

export default function RealestaWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-south-america" />;
}
