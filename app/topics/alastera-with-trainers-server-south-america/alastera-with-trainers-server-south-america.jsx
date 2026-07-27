import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-south-america');
}

export default function AlasteraWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-south-america" />;
}
