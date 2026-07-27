import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-season');
}

export default function Tibia11WithTrainersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-season" />;
}
