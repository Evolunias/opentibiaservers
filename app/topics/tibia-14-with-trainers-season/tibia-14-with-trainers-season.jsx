import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-season');
}

export default function Tibia14WithTrainersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-season" />;
}
