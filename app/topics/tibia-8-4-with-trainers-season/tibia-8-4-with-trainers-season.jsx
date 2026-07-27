import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-trainers-season');
}

export default function Tibia84WithTrainersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-trainers-season" />;
}
