import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-trainers-season');
}

export default function Tibia96WithTrainersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-trainers-season" />;
}
