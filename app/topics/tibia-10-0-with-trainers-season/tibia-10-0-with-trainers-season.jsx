import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-trainers-season');
}

export default function Tibia100WithTrainersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-trainers-season" />;
}
