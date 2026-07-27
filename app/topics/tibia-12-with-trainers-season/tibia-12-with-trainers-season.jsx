import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-trainers-season');
}

export default function Tibia12WithTrainersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-trainers-season" />;
}
