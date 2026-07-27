import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-south-america');
}

export default function KasteriaWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-south-america" />;
}
