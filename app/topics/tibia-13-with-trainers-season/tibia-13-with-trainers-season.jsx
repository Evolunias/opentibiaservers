import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-trainers-season');
}

export default function Tibia13WithTrainersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-trainers-season" />;
}
