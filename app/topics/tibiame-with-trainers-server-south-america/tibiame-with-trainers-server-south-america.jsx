import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-south-america');
}

export default function TibiameWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-south-america" />;
}
