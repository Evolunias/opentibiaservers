import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-trainers-season');
}

export default function Tibia1098WithTrainersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-trainers-season" />;
}
