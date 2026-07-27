import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-south-america');
}

export default function MidhemWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-south-america" />;
}
